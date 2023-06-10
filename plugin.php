<?php
/*
Plugin Name: Hours and Minutes Calculator by Calculator.iO
Plugin URI: https://www.calculator.io/hours-and-minutes-calculator/
Description: This online hours calculator is an easy way to count hours and minutes at the touch of a button.
Version: 1.0.0
Author: Calculator.io
Author URI: https://www.calculator.io/
License: GPLv2 or later
Text Domain: ci_hours_and_minutes_calculator
*/

if (!function_exists('add_shortcode')) die("No direct call");

function display_ci_hours_and_minutes_calculator(){
    $page = 'index.html';
    return '<h2><a href="https://www.calculator.io/hours-and-minutes-calculator/" target="_blank"><img src="' . plugins_url('assets/images/icon-48.png', __FILE__ ) . '" width="48" height="48"></a> Hours and Minutes Calculator</h2><div><iframe style="background:transparent; overflow: scroll" src="' . plugins_url($page, __FILE__ ) . '" width="100%" frameBorder="0" allowtransparency="true" onload="this.style.height = this.contentWindow.document.documentElement.scrollHeight + \'px\';" id="ci_hours_and_minutes_calculator_iframe"></iframe></div>';
}

add_shortcode( 'ci_hours_and_minutes_calculator', 'display_ci_hours_and_minutes_calculator' );