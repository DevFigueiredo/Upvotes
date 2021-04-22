import { Settings } from "../entities/Settings";
import { Repository, EntityRepository } from "typeorm";

@EntityRepository(Settings)
export class SettingsRepository extends Repository<Settings>{}