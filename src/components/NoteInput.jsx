import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      charLimit: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
     const { value } = event.target;
    if (value.length <= this.state.charLimit) {
      this.setState({ title: value });
    }
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    const { title, body } = this.state;

    this.props.addNote({
      title,
      body,
    });
  }

  render() {
    const remainingChars = this.state.charLimit - this.state.title.length;
    return (
      <form className="note-input" onSubmit={this.onSubmitEventHandler}>
        <h1 className='note-input__title'>Buat Catatan</h1>
        <p className='note-input__title__char-limit'>Sisa Karakter: {remainingChars}</p>
        <input
          type="text"
          placeholder="Judul Catatan"
          value={this.state.title}
          onChange={this.onTitleChangeEventHandler}
          required
        />
        <textarea
          placeholder="Isi Catatan"
          value={this.state.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button type="submit" >Buat</button>
      </form>
    );
  }
}

export default NoteInput;
