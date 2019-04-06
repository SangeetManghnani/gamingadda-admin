import * as Yup from 'yup';

const CreateMatchSchema = Yup.object().shape({
    map: Yup.string()
        .required('Required')
        .matches(/(Erangle|Vikendi|Miramar|Sanhok|erangle|vikendi|miramar|sanhok)/),
    pool: Yup.number()
        .required('Required')
        .positive()
        .moreThan(0)
        .integer(),
    perKill: Yup.number()
        .required('Required')
        .positive()
        .moreThan(0)
        .integer(),
    winnerPrize: Yup.number()
        .required('Required')
        .positive()
        .moreThan(0)
        .integer(),
    runnerPrize: Yup.number()
        .required('Required')
        .positive()
        .moreThan(0)
        .integer(),
    entryFee: Yup.number()
        .required('Required')
        .positive()
        .moreThan(0)
        .integer(),
});

export default CreateMatchSchema;