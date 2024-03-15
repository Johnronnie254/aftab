"""Create Receipt model

Revision ID: c62c2acaa549
Revises: 
Create Date: 2024-03-04 16:20:05.849358

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'c62c2acaa549'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('towingcompanies',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('company_name', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('phone_number', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(), nullable=False),
    sa.Column('email', sa.String(), nullable=False),
    sa.Column('password', sa.String(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('vehicles',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('plate_number', sa.String(), nullable=False),
    sa.Column('reason_towing', sa.String(), nullable=False),
    sa.Column('location', sa.String(), nullable=False),
    sa.Column('date_of_towing', sa.String(), nullable=False),
    sa.Column('fine_amount', sa.Integer(), nullable=False),
    sa.Column('towing_id', sa.Integer(), nullable=False),
    sa.Column('towing_company_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['towing_company_id'], ['towingcompanies.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('payments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('payment_status', sa.String(), nullable=False),
    sa.Column('payment_date', sa.DateTime(), nullable=False),
    sa.Column('amount', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('vehicle_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['vehicle_id'], ['vehicles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pleadqueries',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('query', sa.String(), nullable=False),
    sa.Column('comment', sa.String(), nullable=False),
    sa.Column('date', sa.Integer(), nullable=False),
    sa.Column('vehicle_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['vehicle_id'], ['vehicles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('receipts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('receipt_id', sa.Integer(), nullable=False),
    sa.Column('payment_details', sa.String(), nullable=False),
    sa.Column('date', sa.Integer(), nullable=False),
    sa.Column('vehicle_id', sa.Integer(), nullable=True),
    sa.Column('towing_company_id', sa.Integer(), nullable=True),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['towing_company_id'], ['towingcompanies.id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['vehicle_id'], ['vehicles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('vehicleretrievals',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('retrieval_date', sa.Integer(), nullable=False),
    sa.Column('retrieval_status', sa.String(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=True),
    sa.Column('vehicle_id', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['vehicle_id'], ['vehicles.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('vehicleretrievals')
    op.drop_table('receipts')
    op.drop_table('pleadqueries')
    op.drop_table('payments')
    op.drop_table('vehicles')
    op.drop_table('users')
    op.drop_table('towingcompanies')
    # ### end Alembic commands ###
