import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import * as z from 'zod';

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .nonempty('Username is required'),
    email: z
      .string()
      .email('Invalid email address')
      .nonempty('Email is required'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .nonempty('Password is required'),
    confirmPassword: z.string().nonempty('Please confirm your password'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: async (data) => {
      try {
        registerSchema.parse(data);
        return { values: data, errors: {} };
      } catch (err) {
        return {
          values: {},
          errors: err.errors.reduce((acc, { path, message }) => {
            acc[path[0]] = { message };
            return acc;
          }, {}),
        };
      }
    },
  });

  const onSubmit = (data) => {
    console.log('Register data:', data);
  };

  return (
    <div style={{ width: '100%', minHeight: '100vh', background: 'white' }}>
      <nav
        style={{
          display: 'flex',
          maxWidth: '1240px',
          margin: '0 auto',
          justifyContent: 'space-between',
          width: '100%',
          height: '72px',
          padding: '12px 20px',
          alignItems: 'center',
        }}
      >
        <Link
          to="/"
          style={{
            fontWeight: 700,
            margin: 0,
            color: 'black',
            cursor: 'pointer',
            fontSize: '28px',
            letterSpacing: '1px',
          }}
        >
          Speak
        </Link>
      </nav>

      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
          padding: '20px',
        }}
      >
        <h2
          style={{
            width: '400px',
            fontSize: '32px',
            fontWeight: '700',
            marginBottom: '24px',
            textAlign: 'left',
          }}
        >
          Register
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            maxWidth: '400px',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <input
              type="text"
              {...register('username')}
              placeholder="Username"
              style={{
                padding: '8px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                border: errors.username ? '2px solid red' : '2px solid #ccc',
              }}
            />
            {errors.username && (
              <span style={{ color: 'red', fontSize: '14px' }}>
                {errors.username.message}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <input
              type="email"
              {...register('email')}
              placeholder="Email"
              style={{
                padding: '8px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                border: errors.email ? '2px solid red' : '2px solid #ccc',
              }}
            />
            {errors.email && (
              <span style={{ color: 'red', fontSize: '14px' }}>
                {errors.email.message}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <input
              type="password"
              {...register('password')}
              placeholder="Password"
              style={{
                padding: '8px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                border: errors.password ? '2px solid red' : '2px solid #ccc',
              }}
            />
            {errors.password && (
              <span style={{ color: 'red', fontSize: '14px' }}>
                {errors.password.message}
              </span>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <input
              type="password"
              {...register('confirmPassword')}
              placeholder="Confirm password"
              style={{
                padding: '8px 24px',
                borderRadius: '8px',
                fontSize: '14px',
                border: errors.confirmPassword
                  ? '2px solid red'
                  : '2px solid #ccc',
              }}
            />
            {errors.confirmPassword && (
              <span style={{ color: 'red', fontSize: '14px' }}>
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            style={{
              padding: '8px 24px',
              backgroundColor: 'black',
              color: 'white',
              borderRadius: '8px',
              marginTop: '16px',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#444';
              e.target.style.transform = 'scale(1.02)';
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = 'black';
              e.target.style.transform = 'scale(1)';
            }}
          >
            Register
          </button>
        </form>

        <p style={{ marginTop: '12px', color: '#888', fontSize: '14px' }}>
          Already have an account?{' '}
          <Link to="/login" style={{ fontWeight: 600, color: 'black' }}>
            Login
          </Link>
        </p>
      </section>
    </div>
  );
}

export default Register;
