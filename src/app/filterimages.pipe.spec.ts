import { FilterimagesPipe } from './filterimages.pipe';

const Imagenes = [
  { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },
  { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
  { "id": 3, "brand": "perro", "url": "assets/images/perro3.jpg" },
  { "id": 4, "brand": "gato", "url": "assets/images/gato1.jpg" },
  { "id": 5, "brand": "gato", "url": "assets/images/gato2.jpg" }
]

describe('FilterimagesPipe', () => {
  it('Al enviar "all" deben aparacer las imagenes de los animales', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(Imagenes, 'all')).toEqual(Imagenes);
  });

  it('Al enviar "perro" debe retornar todos los perros', () => {
    const pipe = new FilterimagesPipe();
    const detailExpected = [
      { id: 1, brand: 'perro', url: 'assets/images/perro1.jpg' },
      { id: 2, brand: 'perro', url: 'assets/images/perro2.jpg' },
      { id: 3, brand: 'perro', url: 'assets/images/perro3.jpg' }
    ];
    expect(pipe.transform(Imagenes, 'perro')).toEqual(detailExpected);
  });

  it('Al enviar "araña" no debe retornar nada', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe.transform(Imagenes, 'hamster')).toEqual([]);
  });
});