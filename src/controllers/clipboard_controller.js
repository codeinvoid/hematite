import { Controller } from "@hotwired/stimulus"
export default class ClipboardController extends Controller {
    static targets = [ "source" ]
  
    copy() {
      const event = this.dispatch("copy", { cancelable: true })
      if (event.defaultPrevented) return
      navigator.clipboard.writeText(this.sourceTarget.value)
    }
  }
  