import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import { AppError } from "@utils/AppError";

export async function groupCreate(newGroupName: string) {
  try {
    const storagedGroups = await groupsGetAll()

    const groupAlreadyExists = storagedGroups.includes(newGroupName)

    if (groupAlreadyExists) {
      //lançando o erro
      throw new AppError('Já existe um grupo cadastrado com esse nome')
    }
    const storage = JSON.stringify([...storagedGroups, newGroupName])
    // armazenando no dispositivo do usuario
    await AsyncStorage.setItem(GROUP_COLLECTION, storage )
  } catch(error) {
    throw error;
  }

}