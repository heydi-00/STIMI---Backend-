import { Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Informe } from '../../informe/entities/informe.entity';
import { Obligaciones } from '../../obligaciones/entities/obligaciones.entity';

@Entity('informe_obligacion')
export class InformeObligacion {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Informe, { eager: true })
  @JoinColumn({ name: 'id_informe' })
  informe: Informe;

  @ManyToOne(() => Obligaciones, { eager: true })
  @JoinColumn({ name: 'id_obligacion' })
  obligacion: Obligaciones;

}