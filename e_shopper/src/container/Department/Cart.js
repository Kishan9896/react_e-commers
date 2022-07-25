import React from 'react'

export default function Cart() {
    return (
        <div>
            <section id="cart_items">
                <div className="container">
                    <div className="breadcrumbs">
                        <ol className="breadcrumb">
                            <li><a href="#">Home</a></li>
                            <li className="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div className="table-responsive cart_info">
                        <table className="table table-condensed">
                            <thead>
                                <tr className="cart_menu">
                                    <td className="image">Item</td>
                                    <td className="description" />
                                    <td className="price">Price</td>
                                    <td className="quantity">Quantity</td>
                                    <td className="total">Total</td>
                                    <td />
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="cart_product">
                                        <a href><img src="images/cart/one.png" alt /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href><img src="images/cart/two.png" alt /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href><img src="images/cart/three.png" alt /></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href>Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td className="cart_quantity">
                                        <div className="cart_quantity_button">
                                            <a className="cart_quantity_up" href> + </a>
                                            <input className="cart_quantity_input" type="text" name="quantity" defaultValue={1} autoComplete="off" size={2} />
                                            <a className="cart_quantity_down" href> - </a>
                                        </div>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href><i className="fa fa-times" /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section> {/*/#cart_items*/}
            <section id="do_action">
                <div className="container">
                    <div className="heading">
                        <h3>What would you like to do next?</h3>
                        <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="chose_area">
                                <ul className="user_option">
                                    <li>
                                        <input type="checkbox" />
                                        <label>Use Coupon Code</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Use Gift Voucher</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Estimate Shipping &amp; Taxes</label>
                                    </li>
                                </ul>
                                <ul className="user_info">
                                    <li className="single_field">
                                        <label>Country:</label>
                                        <select>
                                            <option>United States</option>
                                            <option>Bangladesh</option>
                                            <option>UK</option>
                                            <option>India</option>
                                            <option>Pakistan</option>
                                            <option>Ucrane</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>
                                    </li>
                                    <li className="single_field">
                                        <label>Region / State:</label>
                                        <select>
                                            <option>Select</option>
                                            <option>Dhaka</option>
                                            <option>London</option>
                                            <option>Dillih</option>
                                            <option>Lahore</option>
                                            <option>Alaska</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>
                                    </li>
                                    <li className="single_field zip-field">
                                        <label>Zip Code:</label>
                                        <input type="text" />
                                    </li>
                                </ul>
                                <a className="btn btn-default update" href>Get Quotes</a>
                                <a className="btn btn-default check_out" href>Continue</a>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="total_area">
                                <ul>
                                    <li>Cart Sub Total <span>$59</span></li>
                                    <li>Eco Tax <span>$2</span></li>
                                    <li>Shipping Cost <span>Free</span></li>
                                    <li>Total <span>$61</span></li>
                                </ul>
                                <a className="btn btn-default update" href>Update</a>
                                <a className="btn btn-default check_out" href>Check Out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>{/*/#do_action*/}
            <footer id="footer">{/*Footer*/}
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="companyinfo">
                                    <h2><span>e</span>-shopper</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe1.png" alt />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o" />
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe2.png" alt />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o" />
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe3.png" alt />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o" />
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <a href="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe4.png" alt />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o" />
                                            </div>
                                        </a>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="address">
                                    <img src="images/home/map.png" alt />
                                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Service</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href>Online Help</a></li>
                                        <li><a href>Contact Us</a></li>
                                        <li><a href>Order Status</a></li>
                                        <li><a href>Change Location</a></li>
                                        <li><a href>FAQ’s</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href>T-Shirt</a></li>
                                        <li><a href>Mens</a></li>
                                        <li><a href>Womens</a></li>
                                        <li><a href>Gift Cards</a></li>
                                        <li><a href>Shoes</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Policies</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href>Terms of Use</a></li>
                                        <li><a href>Privecy Policy</a></li>
                                        <li><a href>Refund Policy</a></li>
                                        <li><a href>Billing System</a></li>
                                        <li><a href>Ticket System</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>About Shopper</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><a href>Company Information</a></li>
                                        <li><a href>Careers</a></li>
                                        <li><a href>Store Location</a></li>
                                        <li><a href>Affillate Program</a></li>
                                        <li><a href>Copyright</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-offset-1">
                                <div className="single-widget">
                                    <h2>About Shopper</h2>
                                    <form action="#" className="searchform">
                                        <input type="text" placeholder="Your email address" />
                                        <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                                        <p>Get the most recent updates from <br />our site and be updated your self...</p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                            <p className="pull-right">Designed by <span><a target="_blank" href="http://www.themeum.com">Themeum</a></span></p>
                        </div>
                    </div>
                </div>
            </footer>{/*/Footer*/}
        </div>
    )
}
