
export class LogInForm {
  setUserData () {
      const userData = {
       emailInput: document.querySelector(`input[name="email"]`),
       passwordInput: document.querySelector(`input[name="password"]`),
      }
      return userData
  }

  openModal () { 
    const modal = document.createElement('div')
    modal.classList.add('modal', 'show')
    modal.setAttribute('id', 'myModal');
    modal.setAttribute('tabindex', '-1')
    modal.innerHTML = `
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title">Enter your data</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                            <input class="js-enter-email input" name="email" type="email" maxlength="25"">
                            <input class="js-enter-password input" name="password" type="password"
                            maxlength="20">
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn-secondary btn" data-js="signInBtn" data-bs-dismiss="modal">Sign In</button>
                            <button type="button" class="btn-primary me-md-2 btn"data-js="registration"><a
                            href="https://ajax.test-danit.com/front-pages/cards-register.html"
                            target="blank">Registration</a></button>
                          </div>
                        </div>
                      </div>`
    document.body.appendChild(modal)
    this.myModal = new bootstrap.Modal(document.getElementById('myModal'), {})
    this.myModal.show();
    //const removeBtn = modal.querySelector(".js-logIn-btn")
    //removeBtn.addEventListener('click', this.removeAndClose) 
   }

  closeModal() {
      this.myModal.dispose()
      myModal.remove()
  }    
}

