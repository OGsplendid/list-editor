export default function dataIsInvalid(data) {
  const errors = {
    name: { nodata: 'Field must be filled' },
    price: {
      nodata: 'Field must be filled',
      incorrect: 'Price must be a number',
      low: 'Price must be more than zero',
    },
  };

  let text = null;
  let place = null;

  const clearedName = data.name.trim();
  const clearedPrice = Number(data.price.trim());

  if (clearedName.length === 0) {
    text = errors.name.nodata;
    place = 'name';
  } else if (clearedPrice.length === 0) {
    text = errors.price.nodata;
    place = 'price';
  } else if (typeof clearedPrice !== 'number' || Number.isNaN(clearedPrice)) {
    text = errors.price.incorrect;
    place = 'price';
  } else if (clearedPrice <= 0) {
    text = errors.price.low;
    place = 'price';
  } else {
    return false;
  }
  return { text, place };
}
