window.addEventListener('load', function(){
  addContactListener();
  contactListListener();
  sendMessageListener();
})

function addContactListener(){
  contact_form = document.querySelector('.js-add-contact')
  $(contact_form).on('submit',function(e){
    e.preventDefault()

    $.ajax({
       type: "POST",
       url: "/contacts/create",
       data: $(this).serialize(),
       success: function(data) {
         contact_info = JSON.parse(data)
         addContactToList(contact_info)
       }
    });
  })
}

function sendMessageListener(){
  messageBox = document.querySelector(".js-send-message")
  $(messageBox).on('submit', function(e){
    e.preventDefault()

    $.ajax({
       type: "POST",
       url: "/contacts/send_message",
       data: $(this).serialize(),
       success: function(data) {
        console.log(data)
        console.log("success")
       }
    });

  })
}

function addContactToList(contact_info){
  divToAdd = document.querySelector(".js-contact-info").cloneNode()
  divToAdd.innerHTML = contact_info.name
  divToAdd.dataset.contactphone = contact_info.number
  divToAdd.dataset.contactid = contact_info.id
  document.querySelector(".contact-iterator").appendChild(divToAdd)
}

function contactListListener(){
  contactList = document.querySelector(".js-contact-list")
  $(contactList).on('click', ".js-contact-info", function(e){
    autoFillContactInfo(this)
    autoFillMessageInfo(this)
  })
}

function autoFillContactInfo(contact){
  contact_form = document.querySelector(".js-add-contact")
  contact_form.name.value = contact.innerHTML.replace(/^\s+|\s+$/gm,'')
  contact_form.phone.value = contact.dataset.contactphone.replace(/\+1/, "")
}

function autoFillMessageInfo(contact){
  message_form = document.querySelector(".js-send-message")
  message_form.contactid.value = contact.dataset.contactid
}
