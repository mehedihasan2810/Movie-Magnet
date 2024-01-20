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

  sendMessage(msg_id: string, with_webview: boolean) {
    if (!this.initDataUnsafe.query_id) {
      alert("WebViewQueryId not defined");
      return;
    }

    // document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));

    // const btn = document.querySelector("#btn_status");
    // btn.textContent = "Sending...";

    this.apiRequest(
      "sendMessage",
      {
        msg_id: msg_id || "",
        with_webview: !this.initDataUnsafe.receiver && with_webview ? 1 : 0,
      },
      function (_result: any) {
        // document
        //   .querySelectorAll("button")
        //   .forEach((btn) => (btn.disabled = false));
        // if (result.response) {
        //   if (result.response.ok) {
        //     btn.textContent = "Message sent successfully!";
        //     btn.className = "ok";
        //     btn.style.display = "block";
        //   } else {
        //     btn.textContent = result.response.description;
        //     btn.className = "err";
        //     btn.style.display = "block";
        //     alert(result.response.description);
        //   }
        // } else if (result.error) {
        //   btn.textContent = result.error;
        //   btn.className = "err";
        //   btn.style.display = "block";
        //   alert(result.error);
        // } else {
        //   btn.textContent = "Unknown error";
        //   btn.className = "err";
        //   btn.style.display = "block";
        //   alert("Unknown error");
        // }
      },
    );
  }

  apiRequest(method: string, data: any, onCallback: Function) {
    // DISABLE BACKEND FOR FRONTEND DEMO
    // YOU CAN USE YOUR OWN REQUESTS TO YOUR OWN BACKEND
    // CHANGE THIS CODE TO YOUR OWN
    // return (
    //   onCallback &&
    //   onCallback({
    //     error:
    //       "This function (" +
    //       method +
    //       ") should send requests to your backend. Please, change this code to your own.",
    //   })
    // );

    const authData = this.initData || "";
    fetch("/demo/api", {
      method: "POST",
      body: JSON.stringify(
        Object.assign(data, {
          _auth: authData,
          method: method,
        }),
      ),
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        onCallback && onCallback(result);
      })
      .catch(function (_error) {
        onCallback && onCallback({ error: "Server error" });
      });
  }

  changeMenuButton(close: any) {
    // document.querySelectorAll("button").forEach((btn) => (btn.disabled = true));
    // const btnStatus = document.querySelector("#btn_status");
    // btnStatus.textContent = "Changing button...";

    this.apiRequest("changeMenuButton", {}, function (_result: any) {
      //   document
      //     .querySelectorAll("button")
      //     .forEach((btn) => (btn.disabled = false));
      //   if (result.response) {
      //     if (result.response.ok) {
      //       btnStatus.textContent = "Button changed!";
      //       btnStatus.className = "ok";
      //       btnStatus.style.display = "block";
      //       Telegram.WebApp.close();
      //     } else {
      //       btnStatus.textContent = result.response.description;
      //       btnStatus.className = "err";
      //       btnStatus.style.display = "block";
      //       alert(result.response.description);
      //     }
      //   } else if (result.error) {
      //     btnStatus.textContent = result.error;
      //     btnStatus.className = "err";
      //     btnStatus.style.display = "block";
      //     alert(result.error);
      //   } else {
      //     btnStatus.textContent = "Unknown error";
      //     btnStatus.className = "err";
      //     btnStatus.style.display = "block";
      //     alert("Unknown error");
      //   }
    });
    if (close) {
      setTimeout(() => {
        this.webApp.close();
      }, 50);
    }
  }

  checkInitData() {
    if (this.initData === "") {
      alert("no init data");
      return;
    }

    this.apiRequest("checkInitData", {}, function (_result: any) {
      // if (result.ok) {
      //   webViewStatus.textContent = "Hash is correct (async)";
      //   webViewStatus.className = "ok";
      // } else {
      //   webViewStatus.textContent = result.error + " (async)";
      //   webViewStatus.className = "err";
      // }
    });
  }

  sendText(text: string) {
    // const textField = document.querySelector("#text_field");
    // const text = textField.value;
    // if (!text.length) {
    //   return textField.focus();
    // }
    if (this._byteLength(text) > 4096) {
      return alert("Text is too long");
    }

    this.webApp.sendData(text);

    // const repeat = spam ? 10 : 1;
    // for (let i = 0; i < repeat; i++) {
    // this.webApp.sendData(text);
    // }
  }

  showAlert(message: string) {
    this.webApp.showAlert(message);
  }
  showConfirm(message: string) {
    this.webApp.showConfirm(message);
  }

  requestWriteAccess() {
    this.webApp.requestWriteAccess((result) => {
      if (result) {
        this.webApp.showAlert("Write access granted");
      } else {
        this.webApp.showAlert("Write access denied");
      }
    });
  }

  requestContact() {
    this.webApp.requestContact((result) => {
      if (result) {
        this.webApp.showAlert("Contact granted");
      } else {
        this.webApp.showAlert("Contact denied");
      }
    });
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
