const solution = (common) => {
  const isChecked = common[1] - common[0] === common[2] - common[1];

  return (isChecked)
    ?  common[common.length - 1] + common[1] - common[0]
    : common[common.length - 1] * common[1] / common[0];
}
