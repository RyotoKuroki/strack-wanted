// import $ from 'jquery';
import ITR_Wanted from '@/app.entities.interfaces/ITR_Wanted';

/**
 * テーブルの構造を基に、画面バインドに適した構造に整形したモデル。
 * 以下、StrackOut の Wanted ペーパー１枚分。
 */
export default class WantedPaperDesignedModel implements ITR_Wanted {
    
    protected _entity!: ITR_Wanted;

    public uuid!: string;
    public whois!: string;
    public revision!: number;
    public name!: string;
    public prize_money!: number;
    public image_base64!: string;
    public warning!: string;
    public done!: string;

    public btn_saving_caption!: string;

    public EntityToRow(entity: ITR_Wanted) {
        // 初期設定値
        this._entity = entity;
        // 画面バインドフィールド値
        this.uuid = entity.uuid;
        this.whois = entity.whois;
        this.revision = entity.revision;
        this.name = entity.name;
        this.prize_money = entity.prize_money;
        this.image_base64 = entity.image_base64;
        this.warning = entity.warning;
        this.done = entity.done;
    }
}