<?php

namespace Modules\Contract\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Session;
use Modules\Contract\Entities\Contract;

class ContractController extends Controller
{
    /**
     * Where to redirect users after login..
     *
     * @return string
     */
    protected function redirectTo()
    {
        return route('account.dashboard.index');
    }

    public function contractUpdate($id) {
        $contract = Session::get("CurrentContract");
        if($contract != $id){
            Session::put("CurrentContract", $id);
            return "$id Ok";
        }
    }
}
