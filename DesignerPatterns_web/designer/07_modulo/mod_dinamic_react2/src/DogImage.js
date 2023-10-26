import React from "react";

// faço exportação  onde destructor como num 
export function DogImage({ num }) {
  const [src, setSrc] = React.useState("");

  async function loadDogImage() {
    // com isso adiciono no template string para atualizar
    const res = await import(`../assets/dog${num}.png`);
    setSrc(res.default);
  }

  return src ? (
    <img src={src} alt="Dog" />
  ) : (
    <div className="loader">
      <button onClick={loadDogImage}>Click to load image</button>
    </div>
  );
}
