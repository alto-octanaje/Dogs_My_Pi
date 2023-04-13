export default function controllerFrom(newDog) {
  let error = {};
  console.log("en el contriller");
  console.log( newDog.temperaments.lenght);
  if (newDog.temperaments.lenght===undefined) {
    error.temperaments = "Select temperaments";
  }
  if (!newDog.image) {
    error.image = "must have an image";
  }
  if (!newDog.nameDogs) {
    error.nameDogs = "This field cannot be empty";
  }
  if (!newDog.height) {
    error.height = "Select hight";
  }
  if (!newDog.weight) {
    error.weight = "Select weight";
  }

 
  if (!newDog.years) {
    error.years = "Select years";
  }
  

  return error;
}

// https://i.pinimg.com/564x/50/fb/ad/50fbade0dd38517fe28bae80d952792c.jpg