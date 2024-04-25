<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    public function tasks()
    {
        return $this->hasMany(Task::class);
    }

    public function createdBy()
    {
      return $this->belongsTo(User::class, 'created_by'); // Assuming 'created_by' is the foreign key in the 'projects' table
    }

    public function updatedBy()
    {
      return $this->belongsTo(User::class, 'updated_by'); // Assuming 'updated_by' is the foreign key in the 'projects' table
    }
  }
