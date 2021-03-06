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

class Contactform extends Model
{
    protected $id = 'contact_id';

    public static function tableName()
    {
        return 'core_contact_details';
    }
    
    public static function save_contact_details($data)
    {
        $contact_details['contact_name'] = $data['name'];
        $contact_details['email'] = $data['email'];
        $contact_details['phone'] = $data['phone'];
        $contact_details['message'] = $data['message'];
        
        Yii::$app->db->createCommand()->insert('core_contact_details', $contact_details)->execute();
         //send mail to user
        $subject="New Contact Info | Digital Equipments India";
        $message = Mail_settings::get_contact_message_to_admin($data);

        $email = "'".Yii::$app->params['ADMIN_EMAIL']."'";

        Mail_settings::send_email_notification($email,$subject,$message);
        return "SUCCESS";
    }
    
    
    

}
