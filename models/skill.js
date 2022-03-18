const skills = [
    {id: 1, skill: 'Photography'},
    {id: 2, skill: 'Gaming'},
    {id: 3, skill: 'Editing'}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };

  function update(id, skill) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skill.id = parseInt(id)
    skills.splice(idx, 1, skill)
  }

  function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id))
    skills.splice(idx, 1)
  }

  function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getAll() {
    return skills;
  }

  function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
  }

