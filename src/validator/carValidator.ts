import * as Joi from "joi";

const CarValidator = Joi.object({
    brand: Joi.string().pattern( new RegExp ('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$')).messages(
        {'string.pattern.base':'Your brand value didn\'t match pattern'}
    ),
    price: Joi.number().min(0).max(1000000).messages(
        {'number.min':'minimum price is 0',
         'number.max':'maximum price is 1000000'},
    ),
    year: Joi.number().min(1990).max(2024).messages(
        {'number.min':'minimum year is 1990',
        'number.max':'maximum year is 2024'},
    )
});

export default CarValidator;