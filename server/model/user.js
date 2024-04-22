import {sql} from '../db';

export const read = async () => {
    const result = await sql({query: 'SELECT id, name, mode_theme FROM users'});

    return result;
};

export const update = async (id, mode_theme) => {
    const result = await sql({
        query: 'UPDATE users SET mode_theme = ? WHERE id = ?',
        values: [mode_theme, id]
    });

    return result;
};