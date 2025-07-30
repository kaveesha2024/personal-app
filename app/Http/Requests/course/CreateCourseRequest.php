<?php

namespace App\Http\Requests\course;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateCourseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'course_name' => 'required|string|min:3|max:255|unique:courses,course_name',
            'description' => 'string|min:3',
            'logo' => 'required|extensions:jpg,png|mimes:jpg,png,jpeg|max:11024',
        ];
    }

    public function failedValidation(Validator $validator)
    {
        $response = response()->json([
            'status' => false,
            'errors' => $validator->errors(),
        ]);
        throw new HttpResponseException($response);
    }
}
