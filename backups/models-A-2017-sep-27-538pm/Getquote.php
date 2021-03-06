<?php

namespace app\models;

use Yii;
//use yii\base\Model;
use \yii\db\ActiveRecord as Model;
use yii\behaviors\TimestampBehavior;
use yii\db\Expression;
use yii\db\ActiveRecord;
use yii\db\Query;
use yii\base\ErrorException;
use app\models\Mail_settings;

class Getquote extends Model
{
    protected $id = 'quotation_id';

    public static function tableName()
    {
        return 'core_quotation';
    }
    
    //insert new quotation request
    public static function insert_new_quotation($data)
    {
        try{
            $get_quote = $data;
            $get_quote['start_date'] = date('Y-m-d', strtotime($data['start_date']));
            $get_quote['date_created'] = date('Y-m-d H:i:s', strtotime($data['start_date']));
            $get_quote['quote_status'] = 0;
            
            if($get_quote['duration_type'] == '')
                unset($get_quote['duration_type']);
                
            //save quote data
            Yii::$app->db->createCommand()->insert('core_quotation', $get_quote)->execute();
            //send mail to user
            $subject="Big Equipments India | Quotation Enquiry";
            $message = Mail_settings::get_quote_message_to_user($data);

            $email = $data['email'];

            Mail_settings::send_email_notification($email,$subject,$message);
            
            //send email to admin
            $message = Mail_settings::get_quote_message_to_admin($get_quote);
            $email = Yii::$app->params['ADMIN_EMAIL'];
            Mail_settings::send_email_notification($email,$subject,$message);
            
            return "SUCCESS";
            
        } catch (ErrorException $ex) {
            Yii::warning('Error while adding new quote.');
            Yii::warning($ex->getMessage());
            return "FAILED";
        }
        
    }
    
    //get all quotes
    public static function get_all_quotes()
    {
        $query = new Query;
        return $query->select(['core_quotation.*','core_product_categories.category_name','core_product_sub_categories.sub_category_name','core_users.user_name as employee_name'])
                    ->from('core_quotation')
                    ->innerJoin('core_product_categories', 'core_product_categories.category_id=core_quotation.category_id')
                    ->innerJoin('core_product_sub_categories', 'core_product_sub_categories.sub_category_id=core_quotation.sub_category_id')  
                    ->leftJoin('core_users', 'core_quotation.employee_id=core_users.user_id')
                    ->orderBy(['core_quotation.quotation_id' => SORT_DESC])->All();
    }
    
    public static function get_quote_details_by_id($quote_id)
    {
        $query = new Query;
        return $query->select(['core_quotation.*','core_product_categories.category_name','core_product_sub_categories.sub_category_name','core_users.user_name as employee_name'])
                    ->from('core_quotation')
                    ->innerJoin('core_product_categories', 'core_product_categories.category_id=core_quotation.category_id')
                    ->innerJoin('core_product_sub_categories', 'core_product_sub_categories.sub_category_id=core_quotation.sub_category_id')  
                    ->leftJoin('core_users', 'core_quotation.employee_id=core_users.user_id')
                    ->where("core_quotation.quotation_id = $quote_id")
                    ->one();
    }
    
    public static function assign_quote($data)
    {
        return Yii::$app->db->createCommand("UPDATE core_quotation set employee_id =:employee_id,updated_by =:updated_by,date_updated =:date_updated where quotation_id=:quotation_id")
                    ->bindValue(':employee_id', $data['employee_id'])
                    ->bindValue(':updated_by', Yii::$app->user->id)
                    ->bindValue(':date_updated', date('Y-m-d H:i:s'))
                    ->bindValue(':quotation_id', $data['quotation_id'])
                    ->execute();
        
    }
    
    public static function update_quote_status($quote_id,$status)
    {
        try{
            $userId = Yii::$app->user->id;
            $date_updated = date('Y-m-d H:i:s');
            Yii::$app->db->createCommand()->update('core_quotation', ['quote_status' => $status,'updated_by' => $userId,'date_updated' => $date_updated], "quotation_id = '$quote_id'")->execute();
            return true;
        } catch (ErrorException $ex) {
            Yii::warning('Error while updating get quote status.');
            Yii::warning($ex->getMessage());
        }
    }
    

}
