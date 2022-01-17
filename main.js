const NameForm = (props) => {

    const [name, setName] = React.useState('');
  
    const handleChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Le nom a été soumis : ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nom :
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

//-------------------------------------------------
const EssayForm = (props) => {

    const [value, setValue] = React.useState('Écrivez un essai à propos de votre élément du DOM préféré');
  
    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Un essai a été envoyé : ${value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Essay:
                <textarea value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

//-------------------------------------------------
const FlavorForm = (props) => {

    const [value, setValue] = React.useState('coconut');
  
    const handleChange = (e) => {
        setValue(e.target.value);
    }
  
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Votre parfum favori est : ${value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Choisissez votre parfum favori :
                <select value={value} onChange={handleChange}>
                    <option value="grapefruit">Pamplemousse</option>
                    <option value="lime">Citron vert</option>
                    <option value="coconut">Noix de coco</option>
                    <option value="mango">Mangue</option>
                </select>
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
  }

  ReactDOM.render(<NameForm />, <EssayForm />, <FlavorForm />, document.querySelector('#app'));