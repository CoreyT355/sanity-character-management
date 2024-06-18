Need to install the following packages:
supabase@1.176.10
Ok to proceed? (y) export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      aspects: {
        Row: {
          created_at: string | null
          current_track: number[] | null
          description: string | null
          id: string
          is_complex: boolean | null
          name: string | null
          player_character_id: string | null
          track_length: number | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_track?: number[] | null
          description?: string | null
          id?: string
          is_complex?: boolean | null
          name?: string | null
          player_character_id?: string | null
          track_length?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_track?: number[] | null
          description?: string | null
          id?: string
          is_complex?: boolean | null
          name?: string | null
          player_character_id?: string | null
          track_length?: number | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "aspects_player_character_id_fkey"
            columns: ["player_character_id"]
            isOneToOne: false
            referencedRelation: "player_character"
            referencedColumns: ["id"]
          },
        ]
      }
      player_character: {
        Row: {
          bloodline: string | null
          cargo: Json | null
          charts: Json | null
          created_at: string | null
          drives: string[] | null
          edges: Json | null
          id: string
          languages: Json | null
          major_milestones: string[] | null
          minor_milestones: string[] | null
          mires: Json | null
          name: string | null
          origin: string | null
          player: string | null
          post: string | null
          salvage: Json | null
          skills: Json | null
          specimens: Json | null
          updated_at: string | null
          user_id: string | null
          whispers: Json | null
        }
        Insert: {
          bloodline?: string | null
          cargo?: Json | null
          charts?: Json | null
          created_at?: string | null
          drives?: string[] | null
          edges?: Json | null
          id: string
          languages?: Json | null
          major_milestones?: string[] | null
          minor_milestones?: string[] | null
          mires?: Json | null
          name?: string | null
          origin?: string | null
          player?: string | null
          post?: string | null
          salvage?: Json | null
          skills?: Json | null
          specimens?: Json | null
          updated_at?: string | null
          user_id?: string | null
          whispers?: Json | null
        }
        Update: {
          bloodline?: string | null
          cargo?: Json | null
          charts?: Json | null
          created_at?: string | null
          drives?: string[] | null
          edges?: Json | null
          id?: string
          languages?: Json | null
          major_milestones?: string[] | null
          minor_milestones?: string[] | null
          mires?: Json | null
          name?: string | null
          origin?: string | null
          player?: string | null
          post?: string | null
          salvage?: Json | null
          skills?: Json | null
          specimens?: Json | null
          updated_at?: string | null
          user_id?: string | null
          whispers?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "player_character_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      player_character_resources: {
        Row: {
          created_at: string
          id: number
          player_character_id: string
          tags: string[] | null
          text: string | null
          type: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          player_character_id: string
          tags?: string[] | null
          text?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          player_character_id?: string
          tags?: string[] | null
          text?: string | null
          type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "player_character_resources_player_character_id_fkey"
            columns: ["player_character_id"]
            isOneToOne: false
            referencedRelation: "player_character"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
