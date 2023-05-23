const cohort = {
  name: 'May 2022',
  id: 1234,
  student_names: ['Will', 'Jeff', 'Nick']
};

const printCohortNumber = (cohort) => {
  return `${cohort.id} - ${cohort.name} - ${cohort.student_names.length} students in this cohort`;
}

module.exports = { cohort, printCohortNumber};

