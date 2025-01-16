import { Failed } from "../models/failed.model";

export async function addFailed() {
    try {
        await Failed.create({
            name: 'Carlos',
            age: 20,
            middleName: 'Galindo',
            lastName: 'Islas'
        })
        console.log('Failed added successfully');
    } catch {
        throw new Error('Error to add');
    }
}
