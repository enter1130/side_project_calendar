<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\Request;

class ApiController extends Controller
{
    public function memo(){
        $result=false;
        $link='localhost:8001/api/memo';
        try {
            $client=new Client();
            $res=$client->get($link);
            $temp=json_decode($res->getBody()->getContents())->data;
        } catch (GuzzleException $error) {
            $temp=false;
        }


        $data=array();
        if($temp){
            foreach($temp as $item){
                array_push($data,['title'=>$item->title,'start'=>$item->date,'end'=>$item->date,'allDay'=>1,'resource'=>$link]);
            }
        }
        return response()->json(['result'=>$result,'data'=>$data]);
    }
}
