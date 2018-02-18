import { element } from 'protractor';
export class Ui {
    lock(element) {
        document.getElementById("emailControl").classList.add("is-loading");
        document.getElementById("emailControl").setAttribute("disabled", "disabled")
    }

    unlock(element) {
        document.getElementById("emailControl").classList.remove("is-loading");
        document.getElementById("emailControl").removeAttribute("disabled");
    }

    setActive = (element) => {
        document.getElementById(element).classList.add("is-active");
    }

    setInactive = (element) => {
        document.getElementById(element).classList.remove("is-active");
    }
}