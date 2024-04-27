// import {H3Event} from 'h3'
import * as user from '../model/user';

export const read = async () => {
    try {
        const result = await user.read();
        return result;
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Algo va mal'
        });
    }
}

export const update = async (evt) => {
    try {
        const body = await readBody(evt);
        const result = await user.update(
            evt.context.params?.id,
            body.mode_theme
        );
        return result;
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Algo va mal'
        });
    }
}

export const search = async (evt) => {
    try {
        const body = await readBody(evt);
        const result = await user.search(body);
        
        return result;
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Algo va mal'
        });
    }
}

export const search_email = async (evt) => {
    try {
        const body = await readBody(evt);
        const result = await user.search_email(body);
        if(result.length == 0){
            return true;
        }else{
            return false;
        }
    } catch (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Algo va mal'
        });
    }
}