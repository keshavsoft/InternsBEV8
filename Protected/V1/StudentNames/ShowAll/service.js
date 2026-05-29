import { JSONFilePreset } from 'lowdb/node'

const fromJsonPath = async ({ inTableName }) => {
    const db = await JSONFilePreset(`Data/903/${inTableName}.json`, []);

    return db.data;
};

export { fromJsonPath };
