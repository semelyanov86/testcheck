<?php

namespace Modules\Support\Http\Controllers;

use Modules\Support\State;
use Illuminate\Routing\Controller;

class CountryStateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param string $countryCode
     * @return \Illuminate\Http\Response
     */
    public function index($countryCode)
    {
        $states = State::get($countryCode);

        return response()->json($states);
    }
}
