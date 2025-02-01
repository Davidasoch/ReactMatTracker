
import { getProjectById } from "@/app/lib/data";
import ProjectsTable from '@/app/ui/projects/table';
import NfcManager, {NfcTech, Ndef} from 'react-native-nfc-manager';

NfcManager.start();

export default async function Page(props: { params: Promise<{ id: number }> }) {
const params = await props.params
const id = params.id
  //const res = fetchProject()
  //console.log(res)

  const projects = await getProjectById(id);

  async function readNdef() {
    try {
      // register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // the resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // stop the nfc scanning
      NfcManager.cancelTechnologyRequest();
    }
  }



  return (
    <div>
<ProjectsTable  projects={projects}/>
<button onClick={readNdef}>
        <p>Scan a Tag</p>
      </button>
  </div> 
  );
}
