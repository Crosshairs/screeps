import Builder from '../roles/Builder';
import Claimer from '../roles/Claimer';
import Courier from '../roles/Courier';
import Harvester from '../roles/Harvester';
import Mailman from '../roles/Mailman';
import RoadWorker from '../roles/RoadWorker';
import Scout from '../roles/Scout';
import ScoutHarvester from '../roles/ScoutHarvester';
import Upgrader from '../roles/Upgrader';

const roleMap = {
  builder: Builder,
  claimer: Claimer,
  courier: Courier,
  harvester: Harvester,
  mailman: Mailman,
  roadworker: RoadWorker,
  scout: Scout,
  scoutharvester: ScoutHarvester,
  upgrader: Upgrader,
};

export default roleMap;