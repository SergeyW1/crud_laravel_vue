<?php

namespace App\Http\Controllers\Person;

use App\Http\Controllers\Controller;
use App\Models\Person;

class DeleteController extends Controller
{
    public function destroy(Person $person)
    {
        $person->delete();
        return response([]);
    }
}
