import * as React from 'react'

const CopyButton = ({ embed_url }) => {
  const copyToClipboard = () => {
    const textField = document.createElement('textarea');
    textField.innerText = embed_url;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    console.log(embed_url)
  };

  return (
    <button className='btn btn-warning' onClick={copyToClipboard}>
      Copiar
    </button>
  );
};

export default CopyButton