// current Auto-Login functionality doesnt allow for session verification. So only forward to https://matrix.tu-dresden.de/#/
chrome.storage.local.get(['fwdEnabled', 'isEnabled'], function (result) {
  if (result.fwdEnabled) {
    //   console.log('fwd to matrix')
    //   chrome.runtime.sendMessage({ cmd: 'save_clicks', click_count: 1 })
    //   window.location.replace('https://matrix.tu-dresden.de/#/login')
    // } else if (result.fwdEnabled && !result.isEnabled) {
    console.log('fwd to matrix')
    chrome.runtime.sendMessage({ cmd: 'save_clicks', click_count: 1 })
    window.location.replace('https://matrix.tu-dresden.de/#/')
    // }
  }
})
