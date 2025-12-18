// Global Variables
var allContacts = [];
var currentIndex = -1;
var currentImageBase64 = "";

// Load contacts from localStorage when page loads
if (localStorage.getItem("contacts") != null) {
  allContacts = JSON.parse(localStorage.getItem("contacts"));
}
displayContacts();

// Image preview when user selects a photo
function previewImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            currentImageBase64 = e.target.result;
            document.getElementById('modalAvatarPreview').classList.add('d-none');
            document.getElementById('modalAvatarImage').src = currentImageBase64;
            document.getElementById('modalAvatarImage').classList.remove('d-none');
        }
        reader.readAsDataURL(input.files[0]);
    }
}

// Validation Functions
function validateName() {
    var name = document.getElementById("contactName").value;
    var nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (name.length > 0 && !nameRegex.test(name)) {
        document.getElementById("nameError").classList.remove("d-none");
        return false;
    }
    document.getElementById("nameError").classList.add("d-none");
    return true;
}

function validatePhone() {
    var phone = document.getElementById("contactPhone").value;
    var phoneRegex = /^01[0125][0-9]{8}$/;
    if (phone.length > 0 && !phoneRegex.test(phone)) {
        document.getElementById("phoneError").classList.remove("d-none");
        return false;
    }
    document.getElementById("phoneError").classList.add("d-none");
    return true;
}

function validateEmail() {
    var email = document.getElementById("contactEmail").value;
    var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.length > 0 && !emailRegex.test(email)) {
        document.getElementById("emailError").classList.remove("d-none");
        return false;
    }
    document.getElementById("emailError").classList.add("d-none");
    return true;
}

// Attach live validation to input fields
document.getElementById("contactName").addEventListener("input", validateName);
document.getElementById("contactPhone").addEventListener("input", validatePhone);
document.getElementById("contactEmail").addEventListener("input", validateEmail);

// Submit contact (add new or update existing)
function submitContact() {
  var name = document.getElementById("contactName").value;
  var phone = document.getElementById("contactPhone").value;
  var email = document.getElementById("contactEmail").value;
  var address = document.getElementById("contactAddress").value;
  var group = document.getElementById("contactGroup").value;
  var notes = document.getElementById("contactNotes").value;
  var isFav = document.getElementById("contactFavorite").checked;
  var isEmg = document.getElementById("contactEmergency").checked;

  if (group === "") group = "Other";

  // Check if name is provided
  if (!name.trim()) {
      Swal.fire({
          icon: 'error',
          title: 'Missing Name',
          text: 'Please enter a name for the contact!',
          confirmButtonColor: '#8b5cf6'
      });
      return;
  }

  // Check if phone is provided
  if (!phone.trim()) {
      Swal.fire({
          icon: 'error',
          title: 'Missing Phone',
          text: 'Please enter a phone number!',
          confirmButtonColor: '#8b5cf6'
      });
      return;
  }
  
  // Final validation before saving
  var nameRegex = /^[a-zA-Z\s]{2,50}$/;
  var phoneRegex = /^01[0125][0-9]{8}$/;
  var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!nameRegex.test(name) || !phoneRegex.test(phone) || (email !== "" && !emailRegex.test(email))) {
    return;
  }

  // Create contact object
  var contact = {
    name: name,
    phone: phone,
    email: email,
    address: address,
    group: group,
    notes: notes,
    image: currentImageBase64,
    isFavorite: isFav,
    isEmergency: isEmg
  };

  // Add new contact or update existing one
  if (currentIndex == -1) {
    allContacts.push(contact);
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Contact Added Successfully',
      showConfirmButton: false,
      timer: 1500
    });
  } else {
    allContacts[currentIndex] = contact;
    Swal.fire({
      icon: 'success',
      title: 'Updated!',
      text: 'Contact Updated Successfully',
      showConfirmButton: false,
      timer: 1500
    });
    
    currentIndex = -1;
    document.getElementById("saveBtn").innerHTML = '<i class="fa-solid fa-check"></i> Save Contact';
    document.getElementById("modalTitle").innerHTML = "Add New Contact";
  }

  // Save to localStorage and refresh display
  localStorage.setItem("contacts", JSON.stringify(allContacts));
  displayContacts();
  clearForm();

  // Close the modal
  var modalEl = document.getElementById('contactModal');
  var modal = bootstrap.Modal.getInstance(modalEl);
  if(modal) modal.hide();
}

// Generate HTML for a single contact card
function getCardHTML(contact, index) {
    var colors = ['#f43f5e', '#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'];
    var bgIndex = index % colors.length;
    var bgColor = colors[bgIndex];

    // Handle avatar (image or initials)
    var avatarHTML = "";
    if (contact.image && contact.image.trim() !== "") {
        avatarHTML = `<img src="${contact.image}" class="card-avatar-img-full">`;
    } else {
        var initials = contact.name.substring(0, 1).toUpperCase();
        avatarHTML = `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; background:${bgColor}; border-radius:18px;">${initials}</div>`;
    }

    // Badges for favorite and emergency
    var starBadge = contact.isFavorite ? `<div class="avatar-badge star"><i class="fa-solid fa-star"></i></div>` : '';
    var heartBadge = contact.isEmergency ? `<div class="avatar-badge heart"><i class="fa-solid fa-heart-pulse"></i></div>` : '';
    
    // Group badge (hide if "Other" or empty)
    var groupBadge = "";
    if (contact.group && contact.group !== "Other" && contact.group !== "") {
        groupBadge = `<span class="card-tag group-tag">${contact.group}</span>`;
    }

    var emgTag = contact.isEmergency ? `<span class="card-tag emg-tag"><i class="fa-solid fa-heart-pulse me-1"></i>Emergency</span>` : '';

    return `
      <div class="col-md-6 col-lg-6">
        <div class="new-contact-card">
          <div class="d-flex align-items-center mb-3">
            <div class="card-avatar-box me-3">
               ${avatarHTML}
               ${starBadge}
               ${heartBadge}
            </div>
            <div class="pt-1">
               <h5 class="fw-bold mb-1 text-dark" style="font-size: 1.1rem;">${contact.name}</h5>
               <div class="info-badge-row">
                  <div class="phone-icon-box"><i class="fa-solid fa-phone"></i></div>
                  <span>${contact.phone}</span>
               </div>
            </div>
          </div>

          <div class="mb-3">
             ${contact.email ? `
             <div class="info-row-item">
                <div class="info-icon-sq purple"><i class="fa-solid fa-envelope"></i></div>
                <div class="text-secondary small fw-medium text-truncate">${contact.email}</div>
             </div>` : ''}
             
             ${contact.address ? `
             <div class="info-row-item">
                <div class="info-icon-sq green"><i class="fa-solid fa-location-dot"></i></div>
                <div class="text-secondary small fw-medium text-truncate">${contact.address}</div>
             </div>` : ''}
          </div>
          
          <div class="mb-3">
             ${groupBadge}
             ${emgTag}
          </div>

          <div class="action-row pt-3">
             <div class="left-actions d-flex gap-2">
                <a href="tel:${contact.phone}" class="card-action-btn call-bg"><i class="fa-solid fa-phone"></i></a>
                ${contact.email ? `<a href="mailto:${contact.email}" class="card-action-btn mail-bg"><i class="fa-solid fa-envelope"></i></a>` : ''}
             </div>
             <div class="right-actions d-flex gap-2">
                <button onclick="toggleFav(${index})" class="card-action-btn ${contact.isFavorite ? 'star-bg' : 'edit-bg'}"><i class="${contact.isFavorite ? 'fa-solid' : 'fa-regular'} fa-star"></i></button>
                <button onclick="toggleEmg(${index})" class="card-action-btn ${contact.isEmergency ? 'heart-bg' : 'edit-bg'}"><i class="fa-solid fa-heart-pulse"></i></button>
                <button onclick="setUpdate(${index})" class="card-action-btn edit-bg"><i class="fa-solid fa-pen"></i></button>
                <button onclick="deleteContact(${index})" class="card-action-btn del-bg"><i class="fa-solid fa-trash"></i></button>
             </div>
          </div>
        </div>
      </div>
    `;
}

// Display all contacts on the page
function displayContacts() {
  var cartona = "";
  for (var i = 0; i < allContacts.length; i++) {
      cartona += getCardHTML(allContacts[i], i);
  }

  document.getElementById("contactsGrid").innerHTML = cartona;
  displayStats();
  displaySidebars();
  
  // Show/hide empty state message
  if (allContacts.length == 0) {
     document.getElementById("emptyState").classList.remove("d-none");
  } else {
     document.getElementById("emptyState").classList.add("d-none");
  }
}

// Delete a contact with confirmation
function deleteContact(index) {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      allContacts.splice(index, 1);
      localStorage.setItem("contacts", JSON.stringify(allContacts));
      displayContacts();
      Swal.fire(
        'Deleted!',
        'Your contact has been deleted.',
        'success'
      );
    }
  });
}

// Populate form with contact data for editing
function setUpdate(index) {
  currentIndex = index;
  
  document.getElementById("contactName").value = allContacts[index].name;
  document.getElementById("contactPhone").value = allContacts[index].phone;
  document.getElementById("contactEmail").value = allContacts[index].email;
  document.getElementById("contactAddress").value = allContacts[index].address || "";
  document.getElementById("contactGroup").value = allContacts[index].group;
  document.getElementById("contactNotes").value = allContacts[index].notes;
  document.getElementById("contactFavorite").checked = allContacts[index].isFavorite;
  document.getElementById("contactEmergency").checked = allContacts[index].isEmergency;

  // Handle image preview
  currentImageBase64 = allContacts[index].image || "";
  if (currentImageBase64) {
      document.getElementById('modalAvatarImage').src = currentImageBase64;
      document.getElementById('modalAvatarImage').classList.remove('d-none');
      document.getElementById('modalAvatarPreview').classList.add('d-none');
  } else {
      document.getElementById('modalAvatarImage').src = "";
      document.getElementById('modalAvatarImage').classList.add('d-none');
      document.getElementById('modalAvatarPreview').classList.remove('d-none');
  }

  document.getElementById("saveBtn").innerHTML = '<i class="fa-solid fa-check"></i> Update Contact';
  document.getElementById("modalTitle").innerHTML = "Edit Contact";

  var myModal = new bootstrap.Modal(document.getElementById('contactModal'));
  myModal.show();
}

// Search contacts by name, phone, or email
function searchData() {
  var term = document.getElementById("searchInput").value.toLowerCase();
  var cartona = "";

  for (var i = 0; i < allContacts.length; i++) {
    if (
        allContacts[i].name.toLowerCase().includes(term) || 
        allContacts[i].phone.includes(term) ||
        (allContacts[i].email && allContacts[i].email.toLowerCase().includes(term))
       ) {
        cartona += getCardHTML(allContacts[i], i);
    }
  }
  document.getElementById("contactsGrid").innerHTML = cartona;

  // Show empty state if no search results
  if (cartona === "") {
      document.getElementById("emptyState").classList.remove("d-none");
  } else {
      document.getElementById("emptyState").classList.add("d-none");
  }
}

// Toggle favorite status
function toggleFav(index) {
   allContacts[index].isFavorite = !allContacts[index].isFavorite;
   localStorage.setItem("contacts", JSON.stringify(allContacts));
   displayContacts();
}

// Toggle emergency status
function toggleEmg(index) {
   allContacts[index].isEmergency = !allContacts[index].isEmergency;
   localStorage.setItem("contacts", JSON.stringify(allContacts));
   displayContacts(); 
}

// Clear all form fields and reset to add mode
function clearForm() {
  document.getElementById("contactName").value = "";
  document.getElementById("contactPhone").value = "";
  document.getElementById("contactEmail").value = "";
  document.getElementById("contactAddress").value = "";
  document.getElementById("contactNotes").value = "";
  document.getElementById("contactGroup").value = "";
  document.getElementById("contactFavorite").checked = false;
  document.getElementById("contactEmergency").checked = false;
  
  // Reset image preview
  currentImageBase64 = "";
  document.getElementById('contactImageInput').value = "";
  document.getElementById('modalAvatarImage').src = "";
  document.getElementById('modalAvatarImage').classList.add('d-none');
  document.getElementById('modalAvatarPreview').classList.remove('d-none');
  
  // Hide error messages
  document.getElementById("nameError").classList.add("d-none");
  document.getElementById("phoneError").classList.add("d-none");
  document.getElementById("emailError").classList.add("d-none");
  
  document.getElementById("saveBtn").innerHTML = '<i class="fa-solid fa-check"></i> Save Contact';
  document.getElementById("modalTitle").innerHTML = "Add New Contact";
  currentIndex = -1;
}

// Update statistics (total, favorites, emergency)
function displayStats() {
   document.getElementById("totalContactsCount").innerHTML = allContacts.length;
   
   var favCount = 0;
   var emgCount = 0;
   for(var i=0; i<allContacts.length; i++) {
       if(allContacts[i].isFavorite) favCount++;
       if(allContacts[i].isEmergency) emgCount++;
   }

   var subtitle = allContacts.length == 1 ? "Manage and organize your 1 contact" : `Manage and organize your ${allContacts.length} contacts`;
   document.getElementById("mainSubtitle").innerHTML = subtitle;

   document.getElementById("favoritesCount").innerHTML = favCount;
   document.getElementById("emergencyCount").innerHTML = emgCount;
}

// Display contacts in sidebars (favorites and emergency)
function displaySidebars() {
    var favContainer = "";
    var emgContainer = "";
    var colors = ['#f43f5e', '#0ea5e9', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899'];

    for (var i = 0; i < allContacts.length; i++) {
        var bgIndex = i % colors.length;
        var bgColor = colors[bgIndex];

        // Generate avatar HTML
        var avatarHTML = "";
        if (allContacts[i].image && allContacts[i].image.trim() !== "") {
            avatarHTML = `<img src="${allContacts[i].image}" class="sidebar-avatar" style="object-fit:cover;">`;
        } else {
            var initials = allContacts[i].name.substring(0, 1).toUpperCase();
            avatarHTML = `<div class="sidebar-avatar" style="background: ${bgColor};">${initials}</div>`;
        }

        // Build favorite contacts sidebar
        if (allContacts[i].isFavorite) {
            favContainer += `
            <div class="sidebar-item-card">
                ${avatarHTML}
                <div class="overflow-hidden">
                    <div class="fw-bold text-dark mb-1" style="font-size: 0.95rem;">${allContacts[i].name}</div>
                    <div class="text-muted small" style="font-size: 0.8rem;">${allContacts[i].phone}</div>
                </div>
                <a href="tel:${allContacts[i].phone}" class="sidebar-call-btn fav">
                     <i class="fa-solid fa-phone"></i>
                </a>
            </div>`;
        }

        // Build emergency contacts sidebar
        if (allContacts[i].isEmergency) {
             emgContainer += `
            <div class="sidebar-item-card">
                ${avatarHTML}
                <div class="overflow-hidden">
                    <div class="fw-bold text-dark mb-1" style="font-size: 0.95rem;">${allContacts[i].name}</div>
                    <div class="text-muted small" style="font-size: 0.8rem;">${allContacts[i].phone}</div>
                </div>
                <a href="tel:${allContacts[i].phone}" class="sidebar-call-btn emg">
                     <i class="fa-solid fa-phone"></i>
                </a>
            </div>`;
        }
    }

    // Show empty state if no contacts in category
    if(favContainer == "") favContainer = `<div class="text-center text-muted py-3 small">No favorites yet</div>`;
    if(emgContainer == "") emgContainer = `<div class="text-center text-muted py-3 small">No emergency contacts</div>`;

    document.getElementById("favoritesList").innerHTML = favContainer;
    document.getElementById("emergencyList").innerHTML = emgContainer;
}

// Attach search event listener
document.getElementById("searchInput").onkeyup = function() {
    searchData();
};
