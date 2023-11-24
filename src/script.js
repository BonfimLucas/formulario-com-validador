class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario')

        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e =>{
            this.handleSubmit(e);

        });
    }

    handleSubmit(e){
        e.preventDefault();
        const camposValidos = this.CamposSaoValidos();
    }

    CamposSaoValidos(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.id;
            
            if(!campo.value) {
                this.criaErro(campo, `Campo "${label}" nao pode estar em branco.`);
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaCPF(campo)) valid = false;
            }
        }
    }

    validaUsuario(){
        const usuario = campo.value;
        let valid = true;
        if(usuario.length < 3 || usuario > 12){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }
        
        if(usuario.length < 3 || usuario > 12){
            this.criaErro(campo, 'Usuario precisa ter entre 3 e 12 caracteres.')
            valid = false;
        }

        if(!usuario.match(/[a-zA-ZO-9]+/g)){
            this.criaErro(campo, 'Nome de usuario precisa conter apenas letras e/ou numeros.')
            valid = false;
        }
    
        return valid;
    }


    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value);
    
        if(!cpf.valida()){
            this.criaErro(campo, 'CPF invalido.');
            return false;
        };

        return true;
    }

    criaErro(campo, msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement(`afterend`, div);
    }
}

const valida = new ValidaFormulario();