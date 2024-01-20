export class TGWebApp {
  private webApp = window.Telegram.WebApp;
  public initData = this.webApp.initData || "";
  private initDataUnsafe = this.webApp.initDataUnsafe || {};
  private mainButton = this.webApp.MainButton;

  constructor() {}

  init(_options?: any) {
    this.webApp.MainButton.setParams({
      text: "CLOSE APP",
      is_visible: true,
    }).onClick(this.close);
  }

  expand() {
    this.webApp.expand();
  }

  close() {
    this.webApp.close();
  }

  toggleMainButton(el: any) {
    const mainButton = this.mainButton;
    if (mainButton.isVisible) {
      mainButton.hide();
      el.innerHTML = "Show Main Button";
    } else {
      mainButton.show();
      el.innerHTML = "Hide Main Button";
    }
  }

  checkInitData() {
    if (this.initData === "") {
      alert("no init data");
      return;
    }
  }

  sendText(text: string) {
    if (this._byteLength(text) > 4096) {
      return alert("Text is too long");
    }

    this.webApp.sendData(text);
  }

  showAlert(message: string) {
    this.webApp.showAlert(message);
  }
  showConfirm(message: string) {
    this.webApp.showConfirm(message);
  }

  showPopup() {
    this.webApp.showPopup(
      {
        title: "Popup title",
        message: "Popup message",
        buttons: [
          { id: "delete", type: "destructive", text: "Delete all" },
          { id: "faq", type: "default", text: "Open FAQ" },
          { type: "cancel" },
        ],
      },
      (buttonId) => {
        if (buttonId === "delete") {
          this.webApp.showAlert("'Delete all' selected");
        } else if (buttonId === "faq") {
          this.webApp.openLink("https://telegram.org/faq");
        }
      },
    );
  }

  _byteLength(str: string) {
    if (window.Blob) {
      try {
        return new Blob([str]).size;
      } catch (e) {
        this.showAlert("failed to measure the text's byte length!");
      }
    }

    let s = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
      const code = str.charCodeAt(i);
      if (code > 0x7f && code <= 0x7ff) {
        s++;
      } else if (code > 0x7ff && code <= 0xffff) {
        s += 2;
      }

      if (code >= 0xdc00 && code <= 0xdfff) {
        i--;
      }
    }
    return s;
  }
}
