export default function controllerFrom(newDog) {
  let error = {};
  console.log("estoy en el controller");
  console.log(newDog.image);
  // console.log(newDog.rangehight.hmin);

  if (!newDog.image) {
    error.image = "missing image url";
  }
  if (newDog.image) {
    error.image = "Enter the URL of a dog image";
  }

  if (!newDog.nameDogs) {
    error.nameDogs = "This field cannot be empty";
  }

  if (newDog.rangehight.hmin > newDog.rangehight.hmax) {
    error.hight = "";
  } else error.hight = "incorrect value for Height";
  if (newDog.rangewight.wmin > newDog.rangewight.wmax) {
    error.wight = "";
  } else error.wight = "incorrect value for Weight";

  if (!newDog.years) {
    error.years = "Select years";
  }
  if (!newDog.hight) {
    error.hight = "Select hight";
  }
  if (!newDog.wight) {
    error.wight = "Select wight";
  }
  if (newDog.temperaments.length === 0) {
    error.temperaments = "Select temperaments";
  }

  return error;
}
