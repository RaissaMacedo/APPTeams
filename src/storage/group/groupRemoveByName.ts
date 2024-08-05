import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "./groupsGetAll"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig"


export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storageGroups = await groupsGetAll()
    const groups = storageGroups.filter(group => group !== groupDeleted)

    // deleted group not selected
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups))
    // deleted players by group
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
  }  catch(error) {
    throw error
  }
}