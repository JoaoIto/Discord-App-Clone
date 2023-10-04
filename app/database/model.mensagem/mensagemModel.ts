import mongoose, { Document, Model } from 'mongoose';

export interface MensagemDocument extends Document {
    de: string;
    mensagem: string;
}

const mensagemSchema = new mongoose.Schema<MensagemDocument>({
    de: String,
    mensagem: String,
});

const MensagemModel: Model<MensagemDocument> = mongoose.models.Mensagem || mongoose.model('Mensagem', mensagemSchema, 'mensagens');

export default MensagemModel;
