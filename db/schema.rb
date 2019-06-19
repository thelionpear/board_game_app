# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_19_020447) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "board_game_session_rounds", force: :cascade do |t|
    t.integer "board_game_id"
    t.string "game_session_id"
    t.integer "round_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "board_games", force: :cascade do |t|
    t.string "title"
    t.integer "min_players"
    t.integer "max_players"
    t.integer "time_needed"
    t.string "company"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "base_game"
  end

  create_table "creator_board_games", force: :cascade do |t|
    t.integer "creator_id"
    t.integer "board_game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "creators", force: :cascade do |t|
    t.bigint "board_game_id"
    t.string "first_name"
    t.string "last_name"
    t.string "social_media"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["board_game_id"], name: "index_creators_on_board_game_id"
  end

  create_table "friends", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "game_session_games", force: :cascade do |t|
    t.integer "session_id"
    t.integer "board_game_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "game_session_players", force: :cascade do |t|
    t.integer "player_id"
    t.integer "game_session_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "game_sessions", force: :cascade do |t|
    t.bigint "user_id"
    t.string "players"
    t.string "session_date"
    t.string "board_games"
    t.string "rounds"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_game_sessions_on_user_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "game_sessions"
    t.string "games_won"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "rounds", force: :cascade do |t|
    t.string "board_game"
    t.string "players"
    t.string "winner"
    t.bigint "game_session_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_session_id"], name: "index_rounds_on_game_session_id"
  end

  create_table "user_board_games", force: :cascade do |t|
    t.integer "user_id"
    t.integer "board_game_id"
    t.boolean "played"
    t.boolean "played_this_month"
    t.boolean "played_this_year"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "creators", "board_games"
  add_foreign_key "game_sessions", "users"
  add_foreign_key "rounds", "game_sessions"
end
