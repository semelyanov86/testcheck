<?php

namespace Modules\Account\Http\Controllers;

use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Session;
use Modules\Cart\Cart;

class AccountOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $orders = auth()->user()
            ->orders()
            ->latest()
            ->paginate(15);

        return view('public.account.orders.index', compact('orders'));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $order = auth()->user()
            ->orders()
            ->with(['products', 'coupon', 'taxes'])
            ->where('id', $id)
            ->firstOrFail();

        return view('public.account.orders.show', compact('order'));
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $order = auth()->user()
            ->orders()
            ->with(['products', 'coupon', 'taxes'])
            ->where('id', $id)
            ->firstOrFail();

        \Cart::clear();
        $cart = \Cart::instance();

        Session::put('CurrentContract', $order->contract_id);
        $cart->orderId = $order->id;
        $cart->updateContract();
        foreach ($order->products()->get() as $item){
            $cart->store($item->product_id, $item->qty, [] );
        }

//        dump($cart);
        return view('public.account.orders.show', compact('order'));
    }
}
