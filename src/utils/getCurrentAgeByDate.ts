const getCurrentAgeByDate = (birthday: string) => {
  const birthdayDate = new Date(birthday);
  const age = Number((new Date().getTime() - birthdayDate.getTime()) / 31536000000).toFixed(0);

  if (isNaN(Number(age))) {
    return 'Unknown'
  }

  return `${age} years`;
};

export default getCurrentAgeByDate;
