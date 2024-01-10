
import { toggleVisibility } from './actions';
import { updateChart } from './col-chart'// windows event 
// import { openTab } from './actions';
import jQuery from "jquery";


/**
 * Tab Button Click
 */
function onOpenTabClick(buttonTabId, tabId) {
    // init
    jQuery('.tab-content').hide()
    jQuery('.tab-button').removeClass('active')

    jQuery(`#${tabId}`).css('display', 'block')
    jQuery(`#${buttonTabId}`).addClass('active')
}

const initEvent = () => {
    // register
    document.addEventListener("DOMContentLoaded", function () {
        console.log("Document is ready");
        setTimeout(updateChart, 4000);
    });
    // tab button
    jQuery('.tab-button').on('click', function () {
        const buttonTabId = jQuery(this).attr('id');
        const tabId = jQuery(this).data('tab');
        console.log('[tab data]:', buttonTabId, tabId);
        onOpenTabClick(buttonTabId, tabId)
    })
    // toggle-visibility click
    jQuery('.toggle-visibility').on('click', function () {
        const visibility = jQuery(this).data('visibility');
        toggleVisibility(visibility)
    });


}



export { initEvent };