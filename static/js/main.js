// main.js — students will add JavaScript here as features are built

// ------------------------------------------------------------------ //
// Video modal                                                         //
// ------------------------------------------------------------------ //
// The iframe's src is only set while the modal is open. Clearing it on
// close unloads the player, so the video can't keep playing.

document.querySelectorAll("[data-modal-open]").forEach(function (trigger) {
    var modal = document.getElementById(trigger.dataset.modalOpen);
    if (!modal) return;

    var iframe = modal.querySelector("iframe[data-src]");
    var closeBtn = modal.querySelector("[data-modal-close]");

    function openModal() {
        if (iframe) iframe.src = iframe.dataset.src;
        modal.hidden = false;
        document.body.classList.add("modal-open");
        document.addEventListener("keydown", onKeydown);
        if (closeBtn) closeBtn.focus();
    }

    function closeModal() {
        if (iframe) iframe.src = "about:blank";
        modal.hidden = true;
        document.body.classList.remove("modal-open");
        document.removeEventListener("keydown", onKeydown);
        trigger.focus();
    }

    function onKeydown(e) {
        if (e.key === "Escape") closeModal();
    }

    trigger.addEventListener("click", openModal);
    if (closeBtn) closeBtn.addEventListener("click", closeModal);

    // Clicks on the dark overlay (outside the dialog) close the modal
    modal.addEventListener("click", function (e) {
        if (e.target === modal) closeModal();
    });
});
