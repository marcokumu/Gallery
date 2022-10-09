class PiecesController < ApplicationController

    def index
        if params[:gallery_id]
            gallery = Gallery.find(params[:gallery_id])
            pieces = gallery.pieces
        elsif params[:user_id]
            user = @current_user
            pieces = user.pieces
        end
        pieces = Piece.all
        render json: pieces, include: [:user, :gallery], status: :ok
    end
    
    def index_gallery
        gallery = Gallery.find_by(id: params[:id])
        pieces = gallery.pieces
        render json: pieces, status: :ok
    end

    def index_user
        user = @current_user
        pieces = user.pieces
        render json: pieces, status: :ok
    end

    def show
        piece = Piece.find(params[:id])
        render json: piece, status: :ok
    end
    
    def create
        piece = @current_user.pieces.create!(piece_params)
        render json: piece, status: :created
    end

    def update
        piece = Piece.find(params[:id])
        piece.update!(piece_params)
        render json: piece, status: :accepted
    end

    def destroy
        piece = Piece.find(params[:id])
        piece.destroy
    end

    private

    def piece_params
        params.permit(:image, :title, :medium, :description, :worth, :gallery_id)
    end

end
